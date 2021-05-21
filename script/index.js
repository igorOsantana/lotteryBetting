(function( doc, win ) {
    'use strict';
    function app () {
        var gameChosen;
        var ajax = new XMLHttpRequest();
        var responseAjaxRules;

        getRules();

        function getRules () {
            ajax.open( 'GET', '/rules.json' );
            ajax.send();
            ajax.onreadystatechange = function() {
                if ( this.readyState === 4 && this.status === 200 ) {
                    responseAjaxRules = JSON.parse( ajax.responseText );
                    var buttonsFilter = createButtonFilter( responseAjaxRules.types );
                    addButtonFilterOnPage( buttonsFilter );
                }
            }
        }

        function createButtonFilter ( jsonGames ) {
            var fragment = doc.createDocumentFragment();
            jsonGames.forEach( function( game ) {
                var $a = doc.createElement( 'a' );
                $a.setAttribute( 'href', '#' );
                $a.setAttribute( 'data-js', 'btnFilter' );
                $a.classList.add( 'btn-filter', 'filters' );
                $a.style.setProperty( '--btn-filter', game.color );
                $a.textContent = game.type;
                fragment.appendChild( $a );
            });
            return fragment;
        }

        function addButtonFilterOnPage ( buttons ) {
            var $divElementButtonFilter = doc.querySelector( '[data-js=divBtnFilters]' );
            $divElementButtonFilter.appendChild( buttons );
            initEvents();
        }

        function initEvents () {
            var $buttonsFilter = doc.querySelectorAll( '[data-js=btnFilter]' );
            $buttonsFilter.forEach( function( button ) {
                button.addEventListener( 'click', setDataGame );
            });
            $buttonsFilter[0].click();
        }

        function setDataGame ( event ) {
            event.preventDefault();
            gameChosen = event.target.innerText;
            setBetBallsNumbers();
            setNameAndDescriptionGameChosen();
            setButtonsFunctions();
            setSelectedButtonFilter( this );
        }

        function setBetBallsNumbers () {
            var totalNumbers = getTotalNumbersGame( gameChosen );
            var $gameElement = doc.querySelector( '[data-js=divBetBalls]' );
            handleBetBalls( $gameElement, totalNumbers );
            addEventListenerToButtonsBet();
        }

        function getTotalNumbersGame () {
            return getGameChosen().range || 0;
        }

        function handleBetBalls ( divElement, totalNumbers ) {
            var buttons = createBetBalls( totalNumbers );
            while ( divElement.hasChildNodes() ) 
                divElement.removeChild( divElement.lastChild );
            divElement.appendChild( buttons );
        }

        function addEventListenerToButtonsBet () {
            var $buttonsBet = doc.querySelectorAll( '.buttonBet' );
            $buttonsBet.forEach( function( button ){
                button.addEventListener( 'click', handleBallsSelected );
            });
        }

        function handleBallsSelected ( event ) {
            var color = getGameChosen().color;
            var maxNumGame = getGameChosen()['max-number'];
            var howManyNumSelected = getNumsSelected(); 
            if ( howManyNumSelected >= maxNumGame ) {
                if( event.target.classList.contains( 'buttonBetSelected' ) )
                    event.target.classList.remove( 'buttonBetSelected' );
                else
                    win.alert( `Limite máximo de ${ maxNumGame } números atingido!` );
                return;
            }
            event.target.style.setProperty( '--bg-btn-selected', color );
            event.target.classList.toggle( 'buttonBetSelected' );
        }

        function setNameAndDescriptionGameChosen () {
            var nameGame = getGameChosen().type.toUpperCase();
            var description = getGameChosen().description;
            var $elementDescription = doc.querySelector( '[data-js=description]' );
            var $divNameOfGameChosen = doc.querySelector( '[data-js=gameChosen]' );
            $divNameOfGameChosen.textContent = nameGame ? `FOR ${ nameGame }` : 'SEM JOGO' ;
            $elementDescription.textContent = description ? description : 'SEM DESCRIÇÃO' ;
        }

        function setSelectedButtonFilter ( button ) {
            var color = getGameChosen().color;
            var $buttonsFilter = doc.querySelectorAll( '.filters' );
            $buttonsFilter.forEach( function( btn ) {
                btn.style.backgroundColor = 'inherit';
                btn.style.color = btn.style.border;
            });
            button.style.backgroundColor = color;
            button.style.color = '#fff';
        }

        function getGameChosen () {
            var gameChosenData = responseAjaxRules.types.filter( function( item ) {
                return item.type === gameChosen;
            });
            return gameChosenData[0];
        }

        function getNumsSelected () {
            var $allButtonsSelected = doc.querySelectorAll( '.buttonBetSelected' );
            return $allButtonsSelected.length;
        }

        function setButtonsFunctions() {
            var $buttonComplete = doc.querySelector( '[data-js=btnComplete]' );
            var $buttonClear = doc.querySelector( '[data-js=btnClear]' );
            var $buttonAddCart = doc.querySelector( '[data-js=addCart]' );
            
            $buttonComplete.addEventListener( 'click', separateNumSelected );
            $buttonClear.addEventListener( 'click', clearButtonsSelected );
            $buttonAddCart.addEventListener( 'click', allNumbersIsSelected );
        }

        function createBetBalls ( totalNumbers ) {
            var fragment = doc.createDocumentFragment();
            for ( var index = 1 ; index <= totalNumbers ; index++ ) {
                var $button = doc.createElement( 'button' );
                $button.textContent = ( '00' + index ).slice(-2);
                $button.classList.add( 'buttonBet' );
                fragment.appendChild( $button );
            }
            return fragment;
        }

        function separateNumSelected () {
            var allButtonsBet = getAllButtonsBet();
            var buttonsSelected = getNumbersSelected();
            findRandomBetBalls( buttonsSelected, allButtonsBet );
        }

        function clearButtonsSelected () {
            getAllButtonsBet().forEach( function( button ) {
                button.classList.remove( 'buttonBetSelected' );
            });
        }

        function allNumbersIsSelected () {
            var counterNumSelected = 0;
            var maxNumbersCanSelect = getMaxNumCanSelect();
            getAllButtonsBet().forEach( function( button ) {
                if ( button.classList.contains( 'buttonBetSelected' ) ) 
                    ++counterNumSelected;
            });
            if ( counterNumSelected !== maxNumbersCanSelect ) {
                win.alert( `Você selecionou apenas ${ counterNumSelected } dos ${ maxNumbersCanSelect } números necessários!` );
                return;
            }
            var userConfirmed = win.confirm( 'Adicionar os números selecionados?' );
            if( userConfirmed ) {
                getDataToCart();
                clearButtonsSelected();
            }
        }

        function getAllButtonsBet () {
            var $allButtonsBet = doc.querySelectorAll( '.buttonBet' );
            return $allButtonsBet;
        }

        function getNumbersSelected () {
            var numbersSelected = [];
            getAllButtonsBet().forEach( function( button ) {
                if ( button.classList.contains( 'buttonBetSelected' ) ) 
                    numbersSelected.push( button.innerText );
            });
            return numbersSelected;
        }

        function getMaxNumCanSelect () {
            return getGameChosen()['max-number'] || 0;
        };

        function getDataToCart () {
            var numbersSelected = getNumbersSelected();
            var gameData = getGameChosen();
            setDataOnCart( numbersSelected, gameData );
            handleTotalPrice( gameData );
        }

        function setDataOnCart ( numbersSelected, gameData ) {
            var $divElementCart = doc.querySelector( '[data-js=cartBody]' );
            var $cartEmpty = doc.querySelector( '[data-js=cartEmpty]' );
            var colorOfGame = gameData.color;
            var numbersChosen = numbersSelected.join( ', ' );
            var formatedPrice = convertToBRL( gameData.price );
            var gameType = gameData.type;
            ifHasRemoveChildNode( $cartEmpty );
            $divElementCart.innerHTML += createElementToCart( colorOfGame, numbersChosen, gameType, formatedPrice );
            addEventListenerToDeleteCart();
        }

        function handleTotalPrice ( gameData ) {
            var $divTotalPriceElement = doc.querySelector( '[data-js=totalPrice]' );
            var $priceEmpty = doc.querySelector( '[data-js=totalEmpty]' );
            var price = convertToBRL( gameData.price );
            ifHasRemoveChildNode( $priceEmpty );
            addTotalPrice( $divTotalPriceElement, price );
        }

        function ifHasRemoveChildNode ( child ) {
            if ( child ) child.parentNode.removeChild( child );
        }

        function addTotalPrice ( div, price ) {
            var currentValue;
            price = formatePrice( price );
            if ( div.hasChildNodes() === true ) {
                currentValue = formatePrice( div.innerText );
                div.innerText = convertToBRL( Number( currentValue ) + Number( price ) );
                return;
            }
            div.innerText = convertToBRL( Number( price ) );
        }

        function convertToBRL ( element ) {
            return element.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }

        function formatePrice ( element ) {
            return element.match( /\d+,\d{2}/g )[0].replace( ',', '.' );
        }

        function createElementToCart ( color, numbers, game, price ) {
            var newItemCart = 
            `<div class="d-flex align-items-center mb-3">
                <a data-js="btnDelete" href="#" class="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </a>
                <div class="d-flex flex-column ps-2 py-1 borderCart" style="border-left: 4px solid ${ color };" >
                    <p class="textGrayBold">${ numbers }</p>
                    <div class="d-flex">
                        <p class="fw-bold" style="color:${ color };">
                            ${ game }
                        </p>
                        <p class="ms-2 textGray">${ price }</p>
                    </div>
                </div>
            </div>`;
            return newItemCart;
        }

        function addEventListenerToDeleteCart () {
            var $buttonDelete = doc.querySelectorAll( '[data-js=btnDelete]' );
            $buttonDelete.forEach( function( button ){
                button.addEventListener( 'click', deleteElementOnCart );
            });
        }

        function deleteElementOnCart ( event ) {
            event.preventDefault();
            var $divTotalPriceElement = doc.querySelector( '[data-js=totalPrice]' );
            var price = getPriceElementDeleteOnCart( this.parentNode );
            this.parentNode.remove( this.parentNode );
            removeTotalPrice( $divTotalPriceElement, price );
            hasElementsOnCart();
        }

        function getPriceElementDeleteOnCart ( element ) {
            return element.innerText.match( /\d+,\d{2}/g )[0];
        }

        function removeTotalPrice ( div, price ) {
            var currentValue;
            price = formatePrice( price );
            if ( div.hasChildNodes() === true ) {
                currentValue = formatePrice( div.innerText );
                div.innerText = convertToBRL( Number( currentValue ) - Number( price ) );
                return;
            }
            div.innerText = convertToBRL( 0 );
        }

        function hasElementsOnCart () {
            var $divElementCart = doc.querySelector( '[data-js=cartBody]' );
            if ( $divElementCart.hasChildNodes() === false )
                $divElementCart.appendChild( createEmptyCart() );
        }

        function createEmptyCart () {
            var fragment = doc.createDocumentFragment();
            var $p = doc.createElement( 'p' );
            $p.classList.add( 'textGray', 'cartEmpty' );
            $p.setAttribute( 'data-js', 'cartEmpty' );
            $p.textContent = 'Cart is empty';
            return fragment.appendChild( $p );
        }

        function findRandomBetBalls ( buttonsSelected, allButtonsBet ) {
            var maxNumbersCanSelect = getMaxNumCanSelect();
            var rangeGame = getTotalNumbersGame();
            var difBetween = maxNumbersCanSelect - getNumsSelected();
            var arrayRandomNumbers = getNumbersRandonly( rangeGame, difBetween, buttonsSelected );
            setBallRandonly( arrayRandomNumbers, allButtonsBet );
        }

        function getNumbersRandonly ( rangeGame, difBetween, buttonsSelected ) {
            var arrayRandomNumbers = [];
            while ( arrayRandomNumbers.length < difBetween ) {
                var randomNum = Math.floor( Math.random() * rangeGame + 1 );
                var hasThatRandomNumber = buttonsSelected.some( function( button ) {
                    return Number( button ) === randomNum;
                });
                if ( hasThatRandomNumber === false ) 
                    arrayRandomNumbers.push( randomNum );
                var clearDuplicateNumber = new Set( arrayRandomNumbers );
                arrayRandomNumbers = [ ...clearDuplicateNumber ];
            }
            return arrayRandomNumbers;
        }

        function setBallRandonly ( arrayRandomNumbers, allButtonsBet ) {
            var color = getGameChosen().color;
            allButtonsBet.forEach( function( button ) {
                arrayRandomNumbers.forEach( function( randomNum ) {
                    if ( Number( button.innerText ) === randomNum ) {
                        button.style.setProperty( '--bg-btn-selected', color );
                        button.classList.add( 'buttonBetSelected' );
                    }
                });
            });
        }
    }
    app();
})( document, window );