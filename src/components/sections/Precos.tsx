import React from 'react'
import Container from '../layout/Container'

const Precos = () => {
  return (
    <>    
    <div id="mainCoantiner">
      <h2 className="title-h1">Planos de Suporte e Hospedagem de Sistemas</h2>
      <p className='subtitle'>Escolha o plano perfeito para manter suas soluções digitais sempre em ótimo funcionamento</p>        
        <div className="margin-body"> 
        <Container style={{flexWrap:"wrap", justifyContent:"center"}}>
          <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">R$30</div>
                      <div className="time">por mês</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Sites e Páginas</div>
                </div>
                <figure className="pricing-row">Domínio e Hospedagem</figure>                
                <figure className="pricing-row"><span>Gerenciamento de domínio e hospedagem</span></figure>                
                <figure className="pricing-row">Suporte técnico 24/7 via whatsapp</figure>
                <figure className="pricing-row"><span>Otimização de SEO</span></figure>
                <figure className="pricing-row"><span>Gestão do GoogleAds</span></figure>
                <figure className="pricing-row strike"><span>Gestão de automação de e-mail marketing</span></figure>
                
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-green" 
                    href='https://buy.stripe.com/test_dR629qen58J0aBy8wy'>
                      Assinar Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
          
            <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">R$150</div>
                      <div className="time">Por mês</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Sistemas Web</div>
                </div>
                <figure className="pricing-row">Domínio e Hospedagem do Sistema</figure>
                <figure className="pricing-row">Suporte técnico 24/7 via whatsapp</figure>
                <figure className="pricing-row"><span>Gerenciamento de Domínio e Hospedagem</span></figure>
                <figure className="pricing-row"><span>Sistema de Autenticação</span></figure>
                <figure className="pricing-row"><span>Gestão de Proteção e Segurança de dados</span></figure>
                <figure className="pricing-row"><span>Backup e Recuperação</span></figure>
                <figure className="pricing-row"><span>Cryptografia de dados</span></figure>
                <figure className="pricing-row"><span>Monitoramento do Serviço</span></figure>
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-purpel"
                      href='https://buy.stripe.com/test_bIYbK0a6Pf7ogZW8wx'
                    >
                      Assinar Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">R$300</div>
                      <div className="time">Por mês</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Aplicativos</div>
                </div>
                <figure className="pricing-row">Hospedagem da Aplicação: Google PlayStore e Apple AppStore</figure>
                <figure className="pricing-row">Hospedagem do Servidor</figure>
                <figure className="pricing-row">Suporte técnico 24/7 via whatsapp</figure>
                <figure className="pricing-row"><span>Gerenciamento de Domínio e Hospedagem</span></figure>
                <figure className="pricing-row"><span>Gestão de Proteção e Segurança de dados</span></figure>
                <figure className="pricing-row"><span>Backup e Recuperação</span></figure>
                <figure className="pricing-row"><span>Cryptografia de dados</span></figure>
                <figure className="pricing-row"><span>Monitoramento do Serviço</span></figure>
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-orange" href='https://buy.stripe.com/test_fZe15mceX1gygZWdQQ'>Assinar Agora</a></div>
                </div>
              </div>
            </div>

            <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">Enterprise</div>                      
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Personalizado</div>
                </div>                
                <figure className="pricing-row">Hospedagem de Multiplos Sistemas: WEB e APP</figure>
                <figure className="pricing-row">Hospedagem para Servidores Dedicados</figure>
                <figure className="pricing-row">Suporte técnico 24/7 via whatsapp</figure>
                <figure className="pricing-row"><span>Gerenciamento de Domínio e Hospedagens</span></figure>
                <figure className="pricing-row"><span>Gestão de Proteção e Segurança de dados</span></figure>
                <figure className="pricing-row"><span>Backup e Recuperação</span></figure>
                <figure className="pricing-row"><span>Cryptografia de dados</span></figure>
                <figure className="pricing-row"><span>Monitoramento do Serviço</span></figure>
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-yellow"
                    href='https://wa.me/5593984394640'>
                      Entrar em Contato
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </Container>
        </div>
      </div>
    </>
  )
}

export default Precos