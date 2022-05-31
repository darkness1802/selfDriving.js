let main = document.querySelector('#main')
main.height = window.innerHeight
main.width = 200

const main_ctx = main.getContext('2d')
const road = new Road(main.width/2, main.width*0.9)
const car = new Car(road.getCanterLane(1), 100, 30, 50)

animate()

function animate() {
    car.update()
    main.height = window.innerHeight

    main_ctx.save()
    main_ctx.translate(0, -car.y + main.height*0.5)

    road.draw(main_ctx)
    car.draw(main_ctx)

    main_ctx.restore()
    requestAnimationFrame(animate)
}