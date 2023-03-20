export class Terminal {
  constructor() {
  }

  print(message: String) {
    console.log(message)
    return Promise.resolve()
  }
}
