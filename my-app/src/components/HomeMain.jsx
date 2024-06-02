import React from "react";
import { NavLink } from "react-router-dom";




function HomeMain() {
  return (
    <ul class="cards">
      <NavLink to='/Shops'>
        <li>
          <a href="" class="card">
            <img src = 'https://static.vecteezy.com/ti/vecteur-libre/t1/583708-boutique-en-ligne-icone-vecteur-gratuit-vectoriel.jpg' class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                
                <div class="card__header-text">
                  <h3 class="card__title">Boutiques JO Paris 24</h3>            
                  
                </div>
              </div>
              <p class="card__description">Explorez la liste exhaustive des boutiques officielles des JO Paris 2024 et accédez aux informations essentielles.</p>
            </div>
          </a>      
        </li>
      </NavLink>
      <NavLink to='/sitesComp'>
        <li>
          <a href="" class="card">
            <img src="https://static.vecteezy.com/ti/vecteur-libre/p3/4433863-icone-stade-avec-drapeau-champ-de-sport-symbole-pour-emplacement-vectoriel.jpg" class="card__image" alt="" />
            <div class="card__overlay">        
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                
                <div class="card__header-text">
                  <h3 class="card__title">Sites de compétitions</h3>
                  
                </div>
              </div>
              <p class="card__description">Découvrez la liste complète de tous les sites de compétitions Olympiques et Paralympiques. </p>
            </div>
          </a>
        </li>
      </NavLink>
      <NavLink to='/velosParks'>
        <li>
          <a href="" class="card">
            <img src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T6A1PA5835PT17X110Y76D178379799W9271H7768/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/icone-de-velo-velo-t-shirt-homme.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                
                <div class="card__header-text">
                  <h3 class="card__title">Parkings à vélos</h3>            
                </div>
              </div>
              <p class="card__description">Retrouvez l'ensemble des parkings vélo temporaires pour spectateurs gérés par Paris 2024 en Île-de-France aux abords des sites de compétitions.</p>
            </div>
          </a>
        </li>
      </NavLink>
      <NavLink to='/centresPrepa'>
        <li>
          <a href="" class="card">
            <img src="https://static.vecteezy.com/system/resources/previews/011/415/295/original/distribution-center-icon-design-free-vector.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                
                <div class="card__header-text">
                  <h3 class="card__title">Centres de Préparation</h3>
                  
                </div>          
              </div>
              <p class="card__description">Retrouvez l'ensemble des Centres de Préparation aux Jeux de Paris 2024</p>
            </div>
          </a>
        </li> 
      </NavLink>
      <NavLink to='/culturalEvents'>
        <li>
          <a href="" class="card">
            <img src="https://as1.ftcdn.net/v2/jpg/03/96/37/02/1000_F_396370227_9GbiCPofpOLNFofuXBKmnVcHnJq6dIQc.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                
                <div class="card__header-text">
                  <h3 class="card__title">Evenements Olympiade Culturels</h3>            
                  
                </div>
              </div>
              <p class="card__description">Tous les évènements culturels des JO Paris 2024</p>
            </div>
          </a>      
        </li>
      </NavLink>
      <NavLink to ='volonteersHelp'>
        <li>
          <a href="" class="card">
            <img src="https://static.vecteezy.com/system/resources/previews/040/358/070/non_2x/help-center-icon-in-logotype-vector.jpg" class="card__image" alt="" />
            <div class="card__overlay">        
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                
                <div class="card__header-text">
                  <h3 class="card__title">Carte d'aide pour les Volontaires</h3>
                  
                </div>
              </div>
              <p class="card__description">Fontaines à eau / Toilettes publiques / Distributeurs automatiques de billets / Parkings vélo /Site de compétitions des Jeux Olympiques et Paralympiques </p>
            </div>
          </a>
        </li>
      </NavLink>
    </ul>
    
  );
}

export default HomeMain;
