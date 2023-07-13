import Button from "../button/btn";

const btnLabels = ['Baixar CV 📄', 'Dizer Olá 👋🏻', 'Curtir 👍🏻']

const showLabel = (label) => {
    alert(`A label do botão é "${label}"`)
}

const Buttons = () => {
    return (
        <>
            <h2>Desafio 2 - ⭐</h2>

            <div>
                {
                    btnLabels.map((label,index) => 
                        <Button key={ index } label={btnLabels[index]} showLabel={ showLabel }>
                            { label }
                        </Button>)
                }
            </div>
        </>
    )
}

export default Buttons