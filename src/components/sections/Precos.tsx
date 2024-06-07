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
                      <div className="pricing-cost">$10</div>
                      <div className="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">tiny</div>
                </div>
                <figure className="pricing-row">Photo sharing school</figure>
                <figure className="pricing-row"><span>Drop out ramen hustle</span></figure>
                <figure className="pricing-row strike">Crush revenue traction</figure>
                <figure className="pricing-row strike">Crush revenue traction</figure>
                <figure className="pricing-row strike">User base minimum viable</figure>
                <figure className="pricing-row strike">Lorem ipsum dolor</figure>
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
                      <div className="pricing-cost">$45</div>
                      <div className="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">small</div>
                </div>
                <figure className="pricing-row">Photo sharing school</figure>
                <figure className="pricing-row"><span>Drop out ramen hustle</span></figure>
                <figure className="pricing-row"><span>Crush revenue traction</span></figure>
                <figure className="pricing-row strike">Crush revenue traction</figure>
                <figure className="pricing-row strike">User base minimum viable</figure>
                <figure className="pricing-row strike">Lorem ipsum dolor</figure>
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
                      <div className="pricing-cost">$99</div>
                      <div className="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">medium</div>
                </div>
                <figure className="pricing-row">Photo sharing school</figure>
                <figure className="pricing-row"><span>Drop out ramen hustle</span></figure>
                <figure className="pricing-row"><span>Crush revenue traction</span></figure>
                <figure className="pricing-row">Crush revenue traction</figure>
                <figure className="pricing-row strike">User base minimum viable</figure>
                <figure className="pricing-row strike">Lorem ipsum dolor</figure>
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
                      <div className="pricing-cost">$145</div>
                      <div className="time" style={{display:"inline-block"}}>Per Month</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-row-title">
                  <div className="pricing_row_title">large</div>
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