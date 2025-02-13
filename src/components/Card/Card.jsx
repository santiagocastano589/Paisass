import React, {useEffect, useState} from 'react'
import './Card.css';
import logo from '../../assets/logo.png';




export const Card = () => {

    const [torneo, setTorneo] = useState([]);

    useEffect(() => {
      loadCards();
    }, []);
    



    const loadCards = async () => {
        try {
            const response = await fetch("https://paisassback.onrender.com/torneos");
            const data = await response.json();
            setTorneo(data);
        } catch (error) {
            console.log("Error al cargar los torneos: ", error);
        }
    }

  return (
    <>


        {torneo.map((card) => {

            const fechaInicio = new Date(card.fecha_inicio).toLocaleDateString("es-ES",{
                year: "numeric",
                month: "long",
                day: "2-digit"
            });

            const fechaFinal = new Date(card.fecha_final).toLocaleDateString("es-ES",{
                year: "numeric",
                month: "long",
                day: "2-digit"
            });

            const premio =  new Intl.NumberFormat('en-CO', { 
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(card.premio);

            const inscripcion =  new Intl.NumberFormat('en-CO', { 
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(card.costo_inscripcion);

           
           
            return(

                <div className="card" key={card.id}>
                    <div className="head">
                        <div className="circle"></div>
                        <div className="img">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="description">
                        <input type="hidden" placeholder="Codigo" />
                        <h3>{card.nombre}</h3>
                        <h4>{card.organizador}</h4>
                        <p>Categoria: <span>{card.categoria}</span></p>
                        <p>Disciplina: <span>{card.disciplina}</span></p>
                        <p>Fecha Inicio: <span>{fechaInicio}</span></p>
                        <p>Fecha Final: <span>{fechaFinal}</span></p>
                        <p>Horario: <span>{card.horario}</span></p>
                        <p>Ubicacion: <span>{card.ubicacion}</span></p>
                        <p>Estado de Torneo: <span>{card.estado}</span></p>
                        <p>Maximo de Equipos: <span>{card.max_equipos}</span></p>
                        <p>Costo Inscripción: <span>{inscripcion}</span></p>
                        <p>Premio: <span>{premio}</span></p>
                    </div>
                    <div className="contact">
                        <a href="registro.html">Registrate</a>
                    </div>
                </div>
            );
        })}
    </>
  )
}



