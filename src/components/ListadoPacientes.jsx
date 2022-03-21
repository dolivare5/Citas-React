// reactrccp -> Funcion normal con protypes y parametrs
// reactrsc -> arrow function sin parametros
// reactrsc -> constante
// Función normal sin paramtros -> reactrcc
// reactrscp -> Arrow Function con poarametros

//reactrcjc

import Paciente from "./Paciente";
import {useEffect} from 'react'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div className= 'md:w-2/5 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {pacientes && pacientes.length ? (
                <>
                    <h2
                        className="font-bold text-3xl text-center"
                        >Listado Pacientes
                    </h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administras tus {' '}
                        <span
                            className='text-indigo-600 font-bold '
                            >Pacientes y Citas
                        </span>
                    </p>

                    { pacientes.map( paciente  => (
                        <Paciente
                            key={paciente.id}
                            paciente  = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2
                        className="font-bold text-3xl text-center"
                    >Listado Pacientes
                    </h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Atualmente No hay citas Registradas. {' '}
                        <span
                            className='text-indigo-600 font-bold '
                        >Registralas...
                        </span>
                    </p>
                </>
            )}




        </div>
    );
};

export default ListadoPacientes;