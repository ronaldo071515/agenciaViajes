import { Testimonial } from '../models/Testimonial.js';
import { Viaje } from '../models/Viaje.js';


const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {

    //Consultar BD
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
};

const paginaTestiomoniales = async (req, res) => {

   try {
       const testimoniales = await Testimonial.findAll();
       res.render('testimoniales', {
           pagina: 'Testimoniales',
           testimoniales
       });
   } catch (error) {
        console.log(error);
   }

};

//Muestra un viaje por su slug
const paginaDetalleViaje = async(req, res) => {
    
    const { slug } = req.params;

    try {

        const viaje = await Viaje.findOne({ where: { slug } });
        
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error);
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestiomoniales,
    paginaDetalleViaje
}