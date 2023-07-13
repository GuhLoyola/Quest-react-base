const Text = ({fontText, uppercase}) => {
    return(
        <>
            <h2>Desafio 1 - ⭐</h2>

            <div>
                <p>Texto comum sem nenhuma modificação</p>
                <p style={{color: fontText, textTransform: uppercase}}>Parágrafo muito bem escrito 😅</p>
            </div>

        </>
    );
}

Text.defaultProps = {
    fontText: 'blueviolet',
    uppercase: 'uppercase'
}

export default Text