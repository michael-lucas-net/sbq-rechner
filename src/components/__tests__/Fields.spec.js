import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Fields from '../Fields.vue'

describe('Fields.vue', () => {
  let wrapper
  let fieldVals

  beforeEach(() => {
    fieldVals = {
      employees: 10,
      trainees: 2,
      minors: 1,
      disadvantaged: 3,
      considered: 0,
      result: 0,
    }
    
    // Wir müssen fieldVals als Prop übergeben, da die Komponente dies erwartet
    wrapper = mount(Fields, {
      props: {
        fieldVals
      }
    })
  })

  it('rendert korrekt', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('berechnet die zu berücksichtigenden Mitarbeiter korrekt', async () => {
    // berücksichtigt = Mitarbeiter - (Azubis + Minderjährige)
    // 10 - (2 + 1) = 7
    
    wrapper.vm.changeConsidered()
    
    expect(fieldVals.considered).toBe(7)
  })

  it('berechnet das Quoten-Ergebnis korrekt', async () => {
    // Ergebnis = (benachteiligte / berücksichtigt) * 100
    // (3 / 7) * 100 = 42.857... -> gerundet auf 42.86
    
    // Zuerst "berücksichtigt" berechnen
    wrapper.vm.changeConsidered()
    
    // Dann Ergebnis berechnen
    expect(fieldVals.result).toBe(42.86)
  })
  
  it('verhindert Division durch Null bei 0 zu berücksichtigenden Mitarbeitern', async () => {
    // Werte setzen, damit "berücksichtigt" 0 wird
    fieldVals.employees = 3
    fieldVals.trainees = 2
    fieldVals.minors = 1
    
    wrapper.vm.changeConsidered()
    
    expect(fieldVals.considered).toBe(0)
    expect(fieldVals.result).toBe(0)
  })
})
