import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { link } from 'fs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /* --------------------------------------- Route venant du boitier --------------------------------------- */

  /* 
  Demande du planning d'un écran pour le nombre de jour (le jour actuel inclus)

  idScreen = identifiant écran
  nbDay = nombre de jour
  */
  @Get('/campagne/planning/:idScreen/:nbDay')
  getCampagnePlanning(@Param('idScreen') idScreen, @Param('nbDay') nbDay): string {
    // TODO - recherche des informations dans la bases de données
    // renvoyer les informations de la base de données dans un bon format (changer le ':string' par le bon format)
    return "getPlanning : \n idScreen = " + idScreen + ", \nnbDay = " + nbDay + "\n";
  }

  /*
  Ajout d'un écran dans la base de données

  idWidget = identifiant du widget
  idScreen = identifiant de l'écran
  dataWidget = string de la demande du widget (ligne de commande à envoyer directement sur 
              le web, il me semble fonctionnalité inclus dans chaque widget)
  */
 @Get('/widget/:idWidget/:idScreen/:dataWidget')
 getWidget(@Param('idWidget') idWidget, @Param('idScreen') idScreen, @Param('dataWidget') dataWidget): string{
   // TODO - envoie de la commande datawidget et attente de la réponse à la request
   // renvoyer les informations de la base de données dans un bon format (changer le ':string' par le bon format)
   return "getWidget : \nidWidget = " + idWidget + ", \nidScreen = " + idScreen + ", \ndataWidget = " + dataWidget + "\n";
 }

 @Get('campagne/:idScreen/:linkCampagne')
 getCampagne(@Param('idScreen') idScreen, @Param('linkCampagne') linkCampagne): string{
   // TODO - demande de la campagne de diffusion associé au lien 'linkCampagne' pour l'écran idScreen
   // renvoyer les informations de la base de données dans un bon format (changer le ':string' par le bon format)
   return "getCampagne :\nidScreen = " + idScreen + ",\nlinkCampagne = " + linkCampagne + "\n";
 }


 @Post('newCommer/:nameScreen')
 postNewcommer(@Param('nameScreen') nameScreen): string{
   /* TODO - nouvelle écran connecté, si existe déjà dans la bases de données alors le signaler comme reconnecter, sinon 
            ajouter un nouvelle écran dans la base de données */
   // renvoyer les informations de la base de données dans un bon format (changer le ':string' par le bon format)
   return "postNewcommer :\nnameScreen = " + nameScreen + "\n";
 }

 /* --------------------------------------- Route devant du site web --------------------------------------- */

 /* 
 Nouveauté dans le planning pour la semaine courante, demande de mises à jour des données des planning dans les data des boitiers de chaque écran
 */
 @Post('planning/new/:idScreen')
 postPlanningNew(@Param('idScreen') idScreen): string{
   // TODO - recherche nouveau planning dans bases de données et l'envoyer au boitier correspondant
   // renvoyer les informations de la base de données dans un bon format (changer le ':string' par le bon format)
   return "postPlanningNew : \nidScreen = " + idScreen + "\n";
 }
 
}
