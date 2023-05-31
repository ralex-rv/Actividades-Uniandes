import { Category } from "./Category.js";
import { Director } from "./Director.js";
import { Episode } from "./Episode.js";
import { Performer } from "./Performer.js";
import { Plan } from "./Plan.js";
import { SeriesTV } from "./SeriesTV.js";
import { StreamPlatform } from "./StreamPlatform.js";
function main() {
    const sitio_1 = new StreamPlatform('RTVC Play (TV pública Colombia)', 'https://www.rtvcplay.co/');
    const sitio_2 = new StreamPlatform('Netflix', 'https://www.netflix.com/co/');
    const sitio_3 = new StreamPlatform();
    const plan_A = new Plan(0, 'Usuario Basico', 'El acceso es abierto a todos lo usuarios dentro del terriotorio de Colombia', sitio_1);
    const plan_B = new Plan(16900, 'Basico', `El cliente contará con 'Buena' calidad de video en resolución de 720p y multi-dispositivo`, sitio_2);
    const plan_C = new Plan();
    const director_A = new Director(`Rob Corn`, 'https://static.wikia.nocookie.net/greysanatomy/images/2/24/13x03BTS2.jpg/revision/latest/scale-to-width-down/180?cb=20160920003107', `He is the most frequently director in the episodes of Grey's Anatomy `);
    const serie_1 = new SeriesTV(`Grey's Anatomy`, 'https://static.tvmaze.com/uploads/images/medium_portrait/424/1061065.jpg');
    const episode_1 = new Episode(`A hard day's night`, `Meet Meredith Grey, a woman trying to lead a real life while doing a job that makes having a real life impossible. Meredith is a first year surgical intern at Seattle Grace Hospital, the toughest surgical residency program west of Harvard. She and her fellow first-year interns were students yesterday; today they're doctors in a world where on the job training can be a matter of life and death. Meet the young people struggling to become doctors and the doctors struggling to remain human. It's a world filled with intensity, humor, sex and pain, in which the interns discover that neither medicine nor relationships can be defined in black and white -- real life only comes in shades of grey.`, 60, serie_1);
    const categoria_A = new Category('Drama');
    const categoria_B = new Category();
    const performer_A = new Performer(`Ellen Pompeo`, `https://static.tvmaze.com/uploads/images/medium_portrait/2/5773.jpg`, `She is main character on Grey's Anatomy`);
    //sitio_1.plans.push(plan_A)
    //sitio_2.plans.push(plan_B)    
    serie_1.agregatePerformer(performer_A);
    serie_1.agregateDirector(director_A);
    //serie_1.streamPlatforms.push(sitio_2)
    //serie_1.agregateCategory(categoria_A)
    //serie_1.episodes.push(episode_1)
    const seriados = [serie_1];
    const plataformas = [sitio_1, sitio_2, sitio_3];
    const categorias = [categoria_A, categoria_B];
    SeriesTV.showSeries(seriados);
    serie_1.detailOneSeries();
    Category.showCategories(categorias);
    serie_1.showPerformersAndDirectors();
    performer_A.detailPerformer();
    director_A.detailDirector();
    StreamPlatform.showPlatforms(plataformas);
    sitio_2.detailOnePlatform();
    /*
    const categoria_C : Category = new Category (
        'Acción'
    )

    const categoria_d : Category = new Category (
        'Terror'
    )
    */
}
main();
