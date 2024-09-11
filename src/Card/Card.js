import './Card.css';

export default function CardCard({ capa, logo, titulo, ano, nota, generos, plataformas }) {
    let tipoNota
    if (7 < nota && nota <= 10) {
        tipoNota = 'nota-alta';
    } else if (nota == 7) {
        tipoNota = 'nota-media';
    } else {
        tipoNota = 'nota-baixa';
    }
    return <div className="card">
        <div className="thumbnail">
            <img width={300} height={150} src={capa} alt="" />
            {/* <img width={200} height={50} src={logo} alt="" /> */}
        </div>
        <div className="conteudo">
            <div className="conteudo-principal">
                <div className="titulo">{titulo}</div>
                <div className="ano">{ano}</div>
            </div>
        </div>
        <div className="generos">
            <strong>Gêneros:</strong> {generos.map(g => g.nome).join(', ')}
        </div>
        <div className="plataformas">
            <strong>Plataformas:</strong> {plataformas.map(p => p.nome).join(', ')}
        </div>
        <div className="conteudo-extra">
            <div className={ 'nota ' + tipoNota }>
                {nota}
            </div>
        </div>
    </div>
}