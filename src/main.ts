// JE N'ARRIVE PAS A GENERER AUTOMATIQUEMENT DES CARTES (mais pour voir les cartes, suppr. les cartes commentées dans le HTML + commenter le script dans le HTML)

let playZone = document.querySelector("#playZone") as HTMLDivElement;
let numberOfCards = 6 as number;

function generateCards(numberOfCards:number) {
    for (let index = 0; index < numberOfCards; index++) {
        let idNewCard = "card_" + (index + 1);

        // Création d'une carte vierge.
        const card = document.createElement("article") as HTMLDivElement;
        card.setAttribute("id", idNewCard);
        card.classList.add("playZone__card");

        // Création du cadre contouré qui délimite les marges intérieures de la carte.
        const cardFrame = document.createElement("div") as HTMLDivElement;
        cardFrame.setAttribute("class", "card__frame");


        // Création du cadre de la signature en haut à gauche de la carte.
        const topSignature = document.createElement("div") as HTMLDivElement;
        topSignature?.setAttribute("class", "frame__signature");

        // Création du nombre en haut de la signature.
        const signatureNumber = document.createElement("p") as HTMLParagraphElement;
        signatureNumber?.setAttribute("class", "signature__number");
        signatureNumber.innerText = "A";

        // Création de l'icône en bas de la signature.
        const signatureIcon = document.createElement("svg") as HTMLElement;
        signatureIcon?.setAttribute("class", "signature__icon");
        signatureIcon?.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        signatureIcon?.setAttribute("viewBox", "0 0 512 512");
        signatureIcon?.setAttribute("path fill", "currentColor");
        signatureIcon?.setAttribute("d", "M458.915 307.705c0 62.63-54 91.32-91.34 91.34c-41.64 0-73.1-18.86-91.83-34.26c2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116c-18.73 15.39-50.2 34.28-91.83 34.26c-37.29 0-91.34-28.71-91.34-91.34c0-114.47 80.64-83.32 202.91-276.49c122.28 193.17 202.92 162.03 202.92 276.49z");


        // Création de la grosse icône au centre de la carte.
        const centerIcon = document.createElement("svg") as HTMLElement;
        centerIcon?.setAttribute("class", "frame__icon");
        centerIcon?.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        centerIcon?.setAttribute("viewBox", "0 0 512 512");
        centerIcon?.setAttribute("path fill", "currentColor");
        centerIcon?.setAttribute("d", "M458.915 307.705c0 62.63-54 91.32-91.34 91.34c-41.64 0-73.1-18.86-91.83-34.26c2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116c-18.73 15.39-50.2 34.28-91.83 34.26c-37.29 0-91.34-28.71-91.34-91.34c0-114.47 80.64-83.32 202.91-276.49c122.28 193.17 202.92 162.03 202.92 276.49z");


        // Création de la signature renversée en bas de la carte. 
        const bottomSignature = topSignature as HTMLDivElement;
        //bottomSignature?.setAttribute("class", "frame__signature");
        bottomSignature?.setAttribute("class", "frame__rotate");
        

        // Rajout des éléments créés.
        topSignature.appendChild(signatureNumber);
        topSignature.appendChild(signatureIcon);

        cardFrame.appendChild(topSignature);
        cardFrame.appendChild(centerIcon);
        cardFrame.appendChild(bottomSignature);

        card.appendChild(cardFrame);
        playZone.appendChild(card);

    }

}

generateCards(numberOfCards);

/*
<article class="playZone__card" id="card_1">
        <div class="card__frame">
          <div class="frame__signature">
            <p class="signature__number">A</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="signature__icon" viewBox="0 0 512 512"><path fill="currentColor" d="M458.915 307.705c0 62.63-54 91.32-91.34 91.34c-41.64 0-73.1-18.86-91.83-34.26c2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116c-18.73 15.39-50.2 34.28-91.83 34.26c-37.29 0-91.34-28.71-91.34-91.34c0-114.47 80.64-83.32 202.91-276.49c122.28 193.17 202.92 162.03 202.92 276.49z"/></svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="frame__icon" viewBox="0 0 512 512"><path fill="currentColor" d="M458.915 307.705c0 62.63-54 91.32-91.34 91.34c-41.64 0-73.1-18.86-91.83-34.26c2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116c-18.73 15.39-50.2 34.28-91.83 34.26c-37.29 0-91.34-28.71-91.34-91.34c0-114.47 80.64-83.32 202.91-276.49c122.28 193.17 202.92 162.03 202.92 276.49z"/></svg>
          <div class="frame__signature frame__rotate">
            <p class="signature__number">A</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="signature__icon" viewBox="0 0 512 512"><path fill="currentColor" d="M458.915 307.705c0 62.63-54 91.32-91.34 91.34c-41.64 0-73.1-18.86-91.83-34.26c2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116c-18.73 15.39-50.2 34.28-91.83 34.26c-37.29 0-91.34-28.71-91.34-91.34c0-114.47 80.64-83.32 202.91-276.49c122.28 193.17 202.92 162.03 202.92 276.49z"/></svg>
          </div>
        </div>
      </article>
*/