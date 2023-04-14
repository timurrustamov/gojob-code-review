import { isUserValid } from "./user-validator"

describe('UserValidation', () => {
  it('should not validate invalid user', ()=> {
    const a = isUserValid({});
    expect(a).toEqual(null)
  })

  it('should not validate user', () => {
    const a = isUserValid({email:'bobby', password:'bobby'})
    expect(a).toBe(false)
  })

  it('should not validate user when pass is short', () => {
    const a = isUserValid({email:'bobby@gojob.com', password:'bob'})
    expect(a).toBe(false)
  })
})
