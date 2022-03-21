
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} =paciente;

    function handleEliminar() {
        const respuesta = confirm('¿Deseas eliminar este cita medica?')
        if (respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre de la mascota: {' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre del propietario: {' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                E-mail del propietario: {' '}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha De Alta o De Salida: {' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Observaciones o sintomas: {' '}
                <span className="font-normal normal-case">{sintomas}
                    </span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={ () => setPaciente(paciente) }
                    type="button">Editar</button>
                <button
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    onClick={ handleEliminar  }
                    type="button">Eliminar</button>
            </div>
        </div>
    );
};

export default Paciente;