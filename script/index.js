(function( doc ) {
    'use strict';
    function app () {
        var $buttonFilterLotoFacil = doc.querySelector( '[data-js=lotoFacil-filter]' );
        var $buttonFilterMegaSena = doc.querySelector( '[data-js=megaSena-filter]' );
        var $buttonFilterQuina = doc.querySelector( '[data-js=quina-filter]' );
        var gameChosen;
        var ajax = new XMLHttpRequest();
        var responseAjaxRules;

        initEvents();
        getRules();

        function getRules () {
            ajax.open( 'GET', '/rules.json' );
            ajax.send();
            ajax.onreadystatechange = function() {
                if ( this.readyState === 4 && this.status === 200 ) {
                    responseAjaxRules = JSON.parse( ajax.responseText );
                }
            }
        }

        function initEvents () {
            $buttonFilterLotoFacil.addEventListener( 'click', setDataGame );
            $buttonFilterMegaSena.addEventListener( 'click', setDataGame );
            $buttonFilterQuina.addEventListener( 'click', setDataGame );
        }

        function setDataGame ( event ) {
            gameChosen = event.target.innerText;
            setBetBallsNumbers();
            setNameOfGameChosen();
            setDescription();
            setButtonsFunctions();
            setSelectedButtonFilter( this );
        }

        function setSelectedButtonFilter ( button ) {
            var color = getGameChosen()[0].color;
            var $buttonsFilter = doc.querySelectorAll( '.filters' );
            $buttonsFilter.forEach( function( btn ) {
                btn.style.backgroundColor = 'inherit';
                btn.style.color = btn.style.border;
            });
            button.style.backgroundColor = color;
            button.style.color = '#fff';
        }

        function getGameChosen () {
            return responseAjaxRules.types.filter( function( item ) {
                return item.type === gameChosen;
            });
        }

        function setDescription () {
            var gameClicked = getGameChosen();
            var $elementDescription = doc.querySelector( '[data-js=description]' );
            var description = gameClicked[0].description;
            $elementDescription.textContent = gameClicked ? description : 'SEM DESCRIÇÃO' ;
        }

        function setNameOfGameChosen () {
            var gameClicked = getGameChosen();
            var nameGame = gameClicked[0].type.toUpperCase();
            var $divNameOfGameChosen = doc.querySelector( '[data-js=gameChosen]' );
            $divNameOfGameChosen.textContent = nameGame ? `PARA ${ nameGame }` : 'SEM JOGO' ;
        }

        function setBetBallsNumbers () {
            var totalNumbers = getTotalNumbersGame( gameChosen );
            var $gameElement = doc.querySelector( '[data-js=divBetBalls]' );
            handleBetBalls( $gameElement, totalNumbers );
            addEventListenerToButtonsBet();
        }

        function addEventListenerToButtonsBet () {
            var $buttonsBet = doc.querySelectorAll( '.buttonBet' );
            var maxNumGame = getGameChosen()[0]['max-number'];
            $buttonsBet.forEach( function( button ){
                button.addEventListener( 'click', function( item ) {
                    if ( getNumsSelected() >= maxNumGame ) {
                        item.target.classList.remove( 'buttonBetSelected' );
                        return;
                    }
                    item.target.classList.toggle( 'buttonBetSelected' );
                });
            });
        }

        function getNumsSelected () {
            var $allButtonsSelected = doc.querySelectorAll( '.buttonBetSelected' );
            return $allButtonsSelected.length;
        }

        function handleBetBalls ( divElement, totalNumbers ) {
            var buttons = createBetBalls( totalNumbers );
            while ( divElement.hasChildNodes() ) 
                divElement.removeChild( divElement.lastChild );
            divElement.appendChild( buttons );
        }

        function getTotalNumbersGame () {
            return getGameChosen()[0].range || 0;
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

        function setButtonsFunctions() {
            var $buttonComplete = doc.querySelector( '[data-js=btnComplete]' );
            var $buttonClear = doc.querySelector( '[data-js=btnClear]' );
            var $buttonAddCart = doc.querySelector( '[data-js=addCart]' );
            
            $buttonComplete.addEventListener( 'click', separateNumSelected );
            $buttonClear.addEventListener( 'click', clearButtonsSelected );
            $buttonAddCart.addEventListener( 'click', allNumbersIsSelected );
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
            getAllButtonsBet().forEach( function( button ) {
                if ( button.classList.contains( 'buttonBetSelected' ) ) 
                    ++counterNumSelected;
            });
            var maxNumbersCanSelect = getMaxNumCanSelect();
            if ( counterNumSelected === maxNumbersCanSelect ) {
                getDataToCart();
                return;
            }
            alert( `Você precisa selecionar ${ maxNumbersCanSelect } números!` );
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
            return getGameChosen()[0]['max-number'] || 0;
        };

        function getDataToCart () {
            var numbersSelected = getNumbersSelected();
            var gameData = getGameChosen()[0];
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
                    <p class="grayTitleBold">${ numbers }</p>
                    <div class="d-flex">
                        <p class="fw-bold" style="color:${ color };">
                            ${ game }
                        </p>
                        <p class="ms-2 gameChosen">${ price }</p>
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

        function deleteElementOnCart () {
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
            $p.classList.add( 'gameChosen', 'text-center' );
            $p.setAttribute( 'data-js', 'cartEmpty' );
            $p.textContent = 'Carrinho vazio';
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
            allButtonsBet.forEach( function( button ) {
                arrayRandomNumbers.forEach( function( randomNum ) {
                    if ( Number( button.innerText ) === randomNum )
                        button.classList.add( 'buttonBetSelected' );
                });
            });
        }
    }
    app();
})( document );