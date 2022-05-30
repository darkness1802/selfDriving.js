let main = document.querySelector('#main')
main.height = window.innerHeight
main.width = 200

const main_ctx = main.getContext('2d')
const car = new Car(100, 100, 30, 50)
car.draw(main_ctx)

animate()

function animate() {
    main_ctx.clearRect(0, 0, main.width, main.height)
    main.height = window.innerHeight
    car.update()
    car.draw(main_ctx)
    requestAnimationFrame(animate)
}