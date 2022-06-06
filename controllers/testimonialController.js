import { Testimonial } from "../models/Testimonial.js";


const guardarTestiomonial = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    //Validar
    const errores = [];

    if( nombre.trim() === '' ) {
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if( correo.trim() === '' ) {
        errores.push({mensaje: 'El correo esta vacio'});
    }
    if( mensaje.trim() === '' ) {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if( errores.length > 0 ) {
        //Mostrar los mensajes de erros
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });
    } else {
        //Almacenar en la BD
        
        try {
            
            await Testimonial.create({ nombre,correo,mensaje });
            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }

}



export {
    guardarTestiomonial
}