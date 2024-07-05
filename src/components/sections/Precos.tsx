import React from 'react'
import Container from '../layout/Container'

const Precos = () => {
  return (
    <div id="mainCoantiner">
      <h2 className="title-h1">Planos de Suporte, Manutenção e Administração</h2>
      <p className='subtitle'>Escolha o plano perfeito para manter suas soluções digitais sempre em ótimo funcionamento</p>        
        <div className="margin-body"> 
        <Container style={{flexWrap:"wrap", justifyContent:"center"}}>
          <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">R$119,90</div>
                      <div className="time">por mês</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Iniciante</div>
                </div>
                <figure className="pricing-row">Domínio, Hospedagem e Email Service personalizado</figure>                
                <figure className="pricing-row">Suporte técnico via whatsapp</figure>
                <figure className="pricing-row"><span>Gerenciamento de domínio e hospedagem</span></figure>                
                <figure className="pricing-row"><span>Análise e Otimização de SEO</span></figure>
                <figure className="pricing-row"><span>Gestão do GoogleAds</span></figure>
                <figure className="pricing-row strike"><span>Gestão de automação de e-mail marketing</span></figure>
                
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-green">order now</a>
                  </div>
                </div>
              </div>
            </div>
          
          
            <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">R$549</div>
                      <div className="time">Por mês</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Intermediário</div>
                </div>
                <figure className="pricing-row">Domínio, Hospedagem e Email Service personalizado</figure>
                <figure className="pricing-row">Suporte técnico via whatsapp</figure>
                <figure className="pricing-row"><span>Gerenciamento de domínio e hospedagem</span></figure>                
                <figure className="pricing-row"><span>Análise e Otimização de SEO</span></figure>
                <figure className="pricing-row"><span>Gestão do GoogleAds</span></figure>
                <figure className="pricing-row"><span>Gestão de automação de e-mail marketing</span></figure>
                <figure className="pricing-row strike"><span>Gestão de chatbots e fluxos de automação personalizados</span></figure>
                
               
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-purpel">order now</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-column-wrapper">
              <div className="pricing-column">
                <div className="pricing-price-row">
                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <div className="pricing-cost">R$849</div>
                      <div className="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">Avançado</div>
                </div>
                <figure className="pricing-row">Domínio, Hospedagem e Email Service personalizado</figure>
                <figure className="pricing-row">Suporte técnico via whatsapp</figure>
                <figure className="pricing-row"><span>Gerenciamento de domínio e hospedagem</span></figure>                
                <figure className="pricing-row"><span>Análise e Otimização de SEO</span></figure>
                <figure className="pricing-row"><span>gestão do GoogleAds</span></figure>
                <figure className="pricing-row"><span>Gestão de automação de e-mail marketing</span></figure>
                <figure className="pricing-row"><span>Gestão de chatbots e fluxos de automação personalizados</span></figure>
                <figure className="pricing-row"><span>Gestão de Leads</span></figure>
                
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center">
                    <a className="gem-button gem-orange">order now</a></div>
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
                <figure className="pricing-row">Photo sharing school</figure>
                <figure className="pricing-row"><span>Drop out ramen hustle</span></figure>
                <figure className="pricing-row"><span>Crush revenue traction</span></figure>
                <figure className="pricing-row">Crush revenue traction</figure>
                <figure className="pricing-row">User base minimum</figure>
                <figure className="pricing-row strike">Lorem ipsum dolor</figure>
                <div className="pricing-footer">
                  <div className="gem-button-container gem-button-position-center"><a className="gem-button gem-yellow">order now</a></div>
                </div>
              </div>
            </div> 
          </Container>
        </div>
      </div>
  )
}

export default Precos