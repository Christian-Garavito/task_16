import ButtonCuerpo from '../components/ButtonCuerpo';





export const InicioContenido = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Inicio Contenido</h1>
                </div>
                <div className='botones_inicio_contenido' >
                    <div className='botones_contenido'>
                        <ButtonCuerpo title={"Volver"} href='/' />
                        <ButtonCuerpo title={"Tabla de Contenido"} href='/tabla-contenido' />
                        <ButtonCuerpo title={"Tabla Tipo de Cotenido"} href='/tabla-tipo-contenido' />
                        <ButtonCuerpo title={"Tabla Tipo de Genero"} href='/tabla-tipo-generos' />
                    </div>
                </div>
            </div>
        </>
    );
};