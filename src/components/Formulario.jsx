import {useState, useEffect} from 'react';
import Error from './Error.jsx';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		if( Object.keys(paciente).length > 0 ){
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente])

	const generarID = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);
		return fecha + random;
	}


	const handleSubmit = (e) => {
		e.preventDefault();

		// Validando formulario
		if([nombre, propietario, email, fecha, sintomas].includes('')){
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000)
		} else{
			// Objeto de Paciente
			const objetoPaciente = {
				nombre,
				propietario,
				email,
				fecha,
				sintomas
			}

			if(paciente.id){
				// Editando registro
				objetoPaciente.id = paciente.id;
				const pacientesActualizados = pacientes.map(
					pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState
				)
				setPacientes(pacientesActualizados);
				setPaciente({});
			}else{
				// Nuevo registro
				objetoPaciente.id = generarID();
				setPacientes([...pacientes, objetoPaciente]);
			}

			//Reiniciar el formulario
			setSintomas('');
			setEmail('');
			setNombre('');
			setFecha('');
			setPropietario('');

			setError(false);
		}
	}

	return(
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Segumiento a Pacientes</h2>

			<p className="text-lg mt-5 text-center mb-10 text-xl">
				Agrega Pacientes y {' '}
				<span
					className="text-indigo-600 font-bold">
					Administralos
				</span>
			</p>

			<form
				onSubmit= { handleSubmit}
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
				{error && <Error mensaje = 'Todos los campos son obligatorios' />}
				<div className='mb-5'>

					<label
						htmlFor="nombre-mascota"
						className="block text-gray-700 uppercase font-bold">
						Nombre de la Mascota:
					</label>

					< input
						id="nombre-mascota"
						className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Ingresa aquí el nombre de la mascota"
						value={nombre}
						onChange={ e => setNombre(e.target.value) }
					/>
				</div> { /* input y label correspondiente al nombre de la mascota */}

				<div className='mb-5'>
					<label
						htmlFor="nombre-propietario"
						className="block text-gray-700 uppercase font-bold">
						Nombre del propietario:
					</label>

					<input
						id="nombre-propietario"
						className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Ingresa aquí el nombre del propietario de la mascota"
						value={propietario}
						onChange={ e => setPropietario(e.target.value) }
					/>
				</div> { /* input y label correspondiente al nombre del propietario de la mascota */}

				<div className='mb-5'>

					<label
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold">
						E-mail:
					</label>

					<input
						id="email"
						className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="email"
						placeholder="Ingresa aquí el email de contacto del propietario de la mascota"
						value={email}
						onChange={ e => setEmail(e.target.value) }
					/>
				</div> { /* input y label correspondiente al email de propietario de la mascota */}

				<div className='mb-5'>

					<label
						htmlFor="salida"
						className="block text-gray-700 uppercase font-bold">
						Fecha de alta o de salida:
					</label>

					<input
						id="salida"
						className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="date"
						value={fecha}
						onChange={ e => setFecha(e.target.value) }
					/>
				</div> { /* Label e input de tipo date correspondiente al la fecha de salida de la mascota */}

				<div className='mb-5'>

					<label
						htmlFor="sintomas"
						className="block text-gray-700 uppercase font-bold">
						Observaciones y sintomas presentados:
					</label>

					<textarea
						id="sntomas"
						className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describa aquí las observaciones o sintomas presentados por esta mascota."
						value={sintomas}
						onChange={ e => setSintomas(e.target.value) }
					/>
				</div> { /* TexArea y label correspondiente a los sintomas */}

				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
					value={ paciente.id ? 'Editar Cita' : 'Registrar Cita' }
				/> {/* Botton correspondiente a enviar datos del formulario */}
			</form>
		</div>
	);
};

export default Formulario;

