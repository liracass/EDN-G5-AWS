// script.js

// script.js

// Função para alternar entre os modos de tema (dark e light)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  
  // Evento de clique no botão de alternar tema
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('change', toggleTheme);
  


function openModal(member) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content');

    // Defina o título, a imagem e o conteúdo do modal com base no membro selecionado
    if (member === 'moises') {
        modalTitle.textContent = 'Moises Ximenes';
        modalImage.src = 'img/moises.jpg';
        modalContent.innerHTML = `
        <p>Moises Ximenes Albuquerque...</p>
        <p>Sou casado com a Brenda, pai da Betina, tenho 30 anos e sou formado em Análise e Desenvolvimento de Sistemas. Tenho paixão por aprender e estou comprometido em me atualizar constantemente com as mais recentes tecnologias em nuvem.</p>
        <h3>Formação Acadêmica</h3>
        <ul>
          <li>Análise e Desenvolvimento de Sistemas - <b>Unicarioca</b> (12/2021)</li>
        </ul>
        <h3>Experiência Profissional</h3>
        <ul>
          <li><b>GH TECH</b> - Assistente de TI (12/2019 - Atualmente)</li>
          <li><b>Ergotec Consultoria</b> - Auxiliar Administrativo (05/2017 - 12/2017)</li>
          <li><b>Veterinária Xanadu</b> - Recepcionista (02/2013 - 04/2015)</li>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li><b>AWS</b> - Familiaridade com os serviços da Amazon Web Services, como EC2 (Elastic Compute Cloud), S3 (Simple Storage Service), VPC (Virtual Private Cloud) e outros.</li><br>
          <li><b>Microsoft Azure</b> - Conhecimentos em serviços e recursos oferecidos pela plataforma Microsoft Azure, como configuração de máquinas virtuais, armazenamento em nuvem, balanceadores de carga e serviços de banco de dados.</li><br>
          <li><b>Colaboração</b> - Disposição e interesse em trabalhar em equipe, ajudando e colaborando com os colegas de trabalho para alcançar objetivos comuns.</li><br>
          <li><b>Aprendizado Contínuo</b> - Entusiasmo e compromisso em buscar novos conhecimentos, desenvolver habilidades e se manter atualizado nas últimas tendências e tecnologias relevantes.</li><br>
          <li><b>Resolução de Problemas</b> - Abordagem paciente e habilidades analíticas para identificar, analisar e resolver problemas de forma eficaz, encontrando soluções criativas e práticas.</li>
        </ul>
        <h3>Links</h3>
        <ul>
          <li><a href='https://github.com/moisesximenes' target='_blank'><img src="github.png"></a> 
          <a href='https://www.linkedin.com/in/moises-ximenes/' target='_blank'><img src="linkedin.png"></a> 
          <a href='https://drive.google.com/file/d/1auWP4r5E2t2YnsOIe5jhC8hOpioVBoYo/view' target='_blank'><img src="cv.png"></a></li>
        </ul>
      `;
    } else if (member === 'jefferson') {
        modalTitle.textContent = 'Jefferson Silva';
        modalImage.src = 'img/jefferson.jpeg';
        modalContent.innerHTML = `
        <p>Jefferson Vasconcelos da Silva...</p>
        <p>Analista de Suporte com ampla experiência em diagnóstico e resolução de problemas complexos. Habilidades avançadas em configuração de servidores, administração de redes e suporte técnico de alto nível. Forte capacidade de colaboração e comunicação, buscando sempre fornecer soluções efetivas para os usuários e garantir a estabilidade dos sistemas. Certificado em LE-1: Linux Essentials e Oracle OCI Foundations Associate...</p>
        <h3>Formação Acadêmica</h3>
      <ul>
        <li>Redes de Computadores - <b>Universidade Paulista</b> (2023)</li>
        <li>Informática para Internet - <b>ETEC Pedro Ferreira Alves, Mogi Mirim</b> (2021)</li>
      </ul>
      <h3>Experiência Profissional</h3>
      <ul>
        <li><b>Cooperativa Veiling Holambra</b> - Suporte Técnico TI (2020 - Atual)</li>
      </ul>

      <h3>Habilidades</h3>
      <ul>
        <li>Comunicação eficaz</li>
        <li>Trabalho em equipe</li>
        <li>Pensamento crítico e solução de problemas</li>
      </ul>
      <h3>Links</h3>
      <ul>
      <li><a href='https://github.com/JeffersonProg' target='_blank'><img src="github.png"></a> 
      <a href='https://www.linkedin.com/in/jefferson-vasconcelos-silva/' target='_blank'><img src="linkedin.png"></a> 
      <a href='' target='_blank'><img src="cv.png"></a></li>
    </ul>

      `;
    }

    if (member === 'wellington') {
      modalTitle.textContent = 'Wellington Souza';
      modalImage.src = 'img/wellington.jpeg';
      modalContent.innerHTML = `
      <p>Wellington Luiz de Oliveira Souza...</p>
      <h3>Formação Acadêmica</h3>
      <ul>
        <li>Fundamentos AWS - <b>Escola da Nuvem</b> (2023) </li>
        <li>Segurança da Informação - <b>Faculdade Cruzeiro do Sul</b> (2025)</li>
      </ul>
      <h3>Experiência Profissional</h3>
      <ul>
        <li><b>Autonomo, RJ</b> - Técnico</li>
        <p> - Manutenção e montagens de computadores </p>

        <p> - Suporte técnico a restaurantes com implantação e treinamento de sistemas de controle de caixa. </p>
        
        <p> - Treinamentos de equipes com sistema de delivery. </p>
        
        <p>-Criação planilhas de controles e custos em excel</p>

        <li><b>Majestade Sushi, RJ</b> - Consultor (2017)</li>
        <p> - Responsável pela criação de uma equipe sólida e profissional na parte de qualidade , prazos e custos.</p>
        <p> - Mentoria na formação de chefes de sushibar.</p>
        <p> - Elaboração e implantação de boas práticas funcionais, deixando o trabalho mais ágil e produtivo.</p>
      </ul>
      <h3>Habilidades</h3>
      <ul>
        <li>Conhecimento em linguagem de programação JAVASCRIPT e também em HTML, CSS, REACT. Capacitado e muito bem treinado na área de CLOUD, mais especificamente CLOUD - AWS.</li><br>
        
        <li>Em 5 anos de gestão de equipes no ramo de restaurantes, desenvolvi e transmiti ao grupo, responsabilidades como qualidade, gestão de pessoas, prazos, economia e produtividade.</li><br>
        
        <li>Criação de estratégias em uma empresa de delivery, visando a melhoria em prazos e custos.</li>
      </ul>
      <h3>Links</h3>
      <ul>
      <li><a href='https://www.github.com/21souza' target='_blank'><img src="github.png"></a> 
      <a href='https://www.linkedin.com/in/wellington-luiz-de-o-souza/' target='_blank'><img src="linkedin.png"></a> 
      <a href='https://drive.google.com/file/d/1FYS2p9HSDHzzWi03IQ1yF2n0ItM68yHq/view?usp=drivesdk' target='_blank'><img src="cv.png"></a></li>
    </ul>

    `;
  } else if (member === 'fabiola') {
      modalTitle.textContent = 'Fabiola Leles';
      modalImage.src = 'img/fabiola.jpeg';
      modalContent.innerHTML = `
      <p>Fabiola de Matos Leles...</p>
      <p>Atuo como Service Desk para colaboradores da indústria hospitalar e diagnóstica. Tenho facilidade em entender problemas, analisar a causa e verificar soluções eficazes. Meu objetivo de processos é ligado com a qualidade de execução do serviço.</p>
      <h3>Formação Acadêmica</h3>
        <ul>
          <li>Análise e Desenvolvimento de Sistemas - <b>Universidade Nove de Julho</b> (2013)</li>
        </ul>
        <h3>Experiência Profissional</h3>
        <ul>
          <li><b>Sonda IT</b> - Analista de Service Desk (2023 - Até o momento)</li>
          <li><b>Conduent</b> - Analista de Suporte Bilíngue (2018 - 2022)</li>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li>Paciência para lidar com casos críticos</li>
          <li>Comunicação</li>
          <li>Aprendizagem contínua</li>
        </ul>
        <h3>Links</h3>
        <ul>
          <li><a href='https://github.com/fabyleles' target='_blank'><img src="github.png"></a> 
          <a href='https://www.linkedin.com/in/fabiola-matos-leles-/' target='_blank'><img src="linkedin.png"></a> 
          <a href='' target='_blank'><img src="cv.png"></a></li>
        </ul>
    `;
  }

  if (member === 'raquel') {
    modalTitle.textContent = 'Raquel Pedroso';
    modalImage.src = 'img/raquel.jpg';
    modalContent.innerHTML = `
    <p>Raquel Soares Pedroso...</p>
    <p>Procuro uma nova oportunidade para experiências desafiadoras em minha carreira de Desenvolvimento de Sistemas. Acredito que só assim um profissional pode continuar em constante evolução</p>
    <h3>Formação Acadêmica</h3>
    <ul>
      <li>Análise e Desenvolvimento de Sistemas - <b> UNINTER </b>(2021-2023)</li>
    </ul>
    <h3>Experiência Profissional</h3>
    <ul>
      <li> <b>BRQ Digital Solutions</b> - Técnico de Sistemas JR (2021 - presente)</li>
    </ul>
    <h3>Habilidades</h3>
    <ul>
      <li>Boa Comunicação</li>
      <li>Autonomia</li>
      <li>Conhecimento Técnico em Python, MySQL, Cloud AWS</li>
    </ul>
    <h3>Links</h3>
        <ul>
          <li><a href='x' target='_blank'><img src="github.png"></a> 
          <a href='https://www.linkedin.com/in/raquelspedroso/' target='_blank'><img src="linkedin.png"></a> 
          <a href='' target='_blank'><img src="cv.png"></a></li>
        </ul>
  `;
} else if (member === 'cassiano') {
    modalTitle.textContent = 'Cassiano Lira';
    modalImage.src = 'img/cassiano.png';
    modalContent.innerHTML = `
    <p>Cassiano Câmara da Silva Lira...</p>
    <p>Entre os anos de 2018-2021 estive atuante na área esportiva e do comércio e varejo. 
    A partir de 2022 ingressei no mundo da tecnologia, onde estou à procura da minha primeira experiência de trabalho após essa importante mudança de ramo. Atualmente tenho estudado em busca de alcançar a certificação AWS Cloud Practitioner. 
    Estou sempre procurando desenvolver minhas habilidades e também contribuir para o sucesso da minha equipe. </p>
    <h3>Formação Acadêmica</h3>
        <ul>
          <li>Fundamentos da Programação - <b> SENAC RJ</b> (2022-2023)</li>
          <li>Desenvolvimento Web - <b> Resilia Educação</b> (2022-2023)</li>
          <li>Fundamentos AWS - <b> Escola da Nuvem</b> (2023)</li>
        </ul>
        <h3>Experiência Profissional</h3>
        <ul>
          <li><b>Zona Sul S/A</b> - Jovem Aprendiz (2018-2019)</li>
          <p> - Realização de cadastro no sistema operacional da empresa.</p>
          <p> - Atendimento ao cliente.</p>
          <li><b>Fluminense Football Club</b> - Estagio em Analise de Desempenho (2020)</li>
          <p> - Acompanhava a rotina do departamento de analise de desempenho.</p>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li>AWS</li>
          <li>Colaboração</li>
          <li>Desejo de Aprender</li>
        </ul>
        <h3>Links</h3>
        <ul>
          <li><a href='https://www.github.com/liracass' target='_blank'><img src="github.png"></a> 
          <a href='https://www.linkedin.com/in/cassiano-lira/' target='_blank'><img src="linkedin.png"></a> 
          <a href='https://drive.google.com/file/d/1Q51hxf53S-fnUAwftphK9jHJszG-QDas/view?usp=drive_link' target='_blank'><img src="cv.png"></a></li>
        </ul>
  `;
}

if (member === 'tiago') {
  modalTitle.textContent = 'Tiago Moura Ribeiro';
  modalImage.src = 'img/tiago.jpeg';
  modalContent.innerHTML = `
  <p>Tiago Moura Ribeiro...</p>
  <p>Atuar e desempenhar excelente trabalho na área de Tecnologia da Informação. Especialista em 
  infraestrutura de rede e segurança, ênfase em Sistema Operacional com mais de 11 anos de
  experiência em ambientes Datacenter e Cloud, críticos e de grande escala. Perfil profissional focado 
  em atualização intelectual, combinado com o desenvolvimento do trabalho em equipe,
  autogerenciamento, assertividade na execução das atividades e identificação de soluções compatíveis 
  com a estrutura da organização.</p>

  <h3>Formação Acadêmica</h3>
  <ul>
  <li>Análise e Desenvolvimento de Sistemas - <b> União Educacional de Brasília</b> (2007-2010)</li>
  </ul>
  <h3>Experiência Profissional</h3>
  <ul>
    <li><b>vS Segurança</b> - Analista de Segurança Eletrônica (2003-2009)</li>
    <p> - Coordenador na Central de monitoramento de alarmes. </p>
    <p> - Trabalho em equipe · Segurança · Security · operado </p>

    <li><b>Oi TELECOM</b> - Analista de Sistemas III  (2010-2021)</li>
    <p> - Suporte a servidores Windows, VMWARE, Citrix e Cloud Computing</p>
    <p> - Trabalho em equipe · VMware vCenter · ESXi · VMware vSAN · Cluster · Tecnologia da 
    informação · Recuperação de desastres · Análise de sistemas</p>
    <p> - Sistemas operacionais · Infraestrutura de VMware · Administração de sistemas</p>

    <li><b>V.tal</b> - Analista de Sistemas III sênior (2022-2023)</li>
    <p> - Sysadmin, ITIL, suporte a Windows Server, Virtualização (vSphere, Hyper-v)</p>
    <p> - Antivírus, AD, DNS, Ironport, VMware VRA, VROPs, Cloud Computing</p>
    <p> - Deploy instância em nuvem: GCP e AWS</p>

    <li><b>Sicoob</b> - Analista de Infraestrutura de TI (2023-presente)</li>
    <p> - Responsável na Administração, Arquitetura e Suporte N3 nas soluções VMware (vRA, 
      vSphere, vRO, vROPs, LogInsight e NSX-T)</p>
      <p> -  Atuação em projetos relacionado a armazenamento e processamento de dados de 
      grande porte </p>
      <p> - Virtualização e tecnologias desenvolvidas por diversos fabricantes (IBM, EMC, Brocade, 
      Fujitsu, DELL e Oracle)</p>
      <p> - Análise em ambientes de Cloud e Sistemas Operacionais. Suporte em Oracle PCA.</p>
  </ul>
  <h3>Habilidades</h3>
  <ul>
    <li>AWS</li>
    <li>Azure</li>
    <li>Windows Server</li>
  </ul>
  <h3>Links</h3>
        <ul>
         <li> <a href='x' target='_blank'><img src="github.png"></a> 
          <a href='https://www.linkedin.com/in/tiagomouraribeiro/' target='_blank'><img src="linkedin.png"></a> 
          <a href='https://drive.google.com/file/d/1FKfUCPuOZr4uee3uAEucQlynHp8fGr0E/view?usp=drivesdk' target='_blank'><img src="cv.png"></a>
         </li>
        </ul>
        
`;
} else if (member === 'noisss') {
  modalTitle.textContent = 'GRUPO 5 AWS ESCOLA DA NUVEM';
  modalImage.src = 'img/noisss.jpg';
  modalContent.innerHTML = `
  <p>Descrição do Grupo...</p>
  <!-- Adicione as informações relevantes sobre o Grupo -->
`;
}

    // Repita a estrutura condicional para os demais membros

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
