import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFGdzkhXr3tfw/profile-displayphoto-shrink_200_200/0/1517240553368?e=1655942400&v=beta&t=W_8yDGOKN7tZekExIUvBC2gj7-_IVB5qAs8D-rbn6bU" 
          nome="Diego Reynoldes" 
          descricao="Formado na área de Tecnologia, venho buscando adquirir conhecimentos para me desenvolver cada vez mais na área. Tenho ciência que a área é vasta e todo conhecimento é pouco, 
          e que a busca por aprendizado precisa ser constante."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://www.seekpng.com/png/detail/41-415678_email-icon-vector-circle.png"
          descricao="Email: "
          dados="diego.rpires1@gmail.com"
        />
        <CardPequeno
          imagem="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-house-location-icon-png-image_1701248.jpg"
          descricao="Endereço: "
          dados="Rua Will Smith Slaps Chris Rock, 700, Saint Marcus Garden - Saint Joseph of Black River - SP."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQEbOA0lP-gCDg/company-logo_200_200/0/1600177011516?e=2147483647&v=beta&t=aUUjHxSZDEyhqJct4695TP6WOqnzhXM_oyFp_1GvS_Y" 
          nome="Móveis Província Indústria e Comércio LTDA" 
          descricao="Assistente de Tecnologia. Início em 2018, até a presente data." 
          funcao="Atuo na aprte de infraestrutura, realizando manutenções de suporte I e também atuando em questões operacionais e organizacionais da tecnologia da empresa."
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGzBepht--emg/company-logo_200_200/0/1578410735101?e=2147483647&v=beta&t=IesEPJ7iq6OLxvVIujR8xiudDb-BYmX7qMXf3jXL-3Q" 
          nome="TV Tem São José do Rio Preto" 
          descricao="Estagiário de Tecnologia. Início em 2016, término em 2017." 
          funcao="Atuava realizando suporte I."
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEMT55YzYx4uA/company-logo_200_200/0/1519893927719?e=2147483647&v=beta&t=dcCbtatbYqYJg4s_8yl0sAJwbv4vHJcCOx-FJp_aBF4" 
          nome="Departamento de Trânsito - DETRAN" 
          descricao="Atendimento a clientes. Início em 2015, término em 2016." 
          funcao="Atendimento a clientes diretamente. Triagem, e procedimentos administrativos relacionados a veículos ou habilitações."
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQFpA58O9PR8hQ/company-logo_200_200/0/1638363841594?e=2147483647&v=beta&t=0U8K0kooMvDrUhf0ONUCjQctflrhpPXzIjVTr7olnh8" 
          nome="Poupatempo S. J. do Rio Preto" 
          descricao="Atendimento a clientes. Início em 2013, término em 2014." 
          funcao="Atendimento a clientes diretamente. Triagem, e procedimentos administrativos relacionados a serviços em geral."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
