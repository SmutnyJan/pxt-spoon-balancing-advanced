enum Difficulty {
    Jednoducha = 100,
    Stredni = 50,
    Tezka = 25,
}

//% weight=100 color=#1d1f1d icon="\uf24e" block="Balancování"
namespace balancing {

    let boundary = 30
    let x = 0
    let y = 0
    let previousX = 0
    let previousY = 0
    let currentCoordinates: number[] = []

    /**
    * Spustí hru s obtížností
    * @difficulty Obtížnost hry
    */
    //% block="Spusť hru s obtížností %difficulty"
    export function playGame(difficulty: Difficulty): void {
        boundary = difficulty
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        x = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8))
        y = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8))
        led.plot(x, y)
    }

    /**
    * Vrátí aktuální souřadnice
    */
    //% block="Souřadnice"
    export function coordinates(): number[] {
        previousX  = x
        previousY = y
        x = Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8)
        y = Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8)
        if (x != previousX || y != previousY) {
            led.unplot(previousX, previousY)
            led.plot(x, y)
        }
        currentCoordinates[0] = x
        currentCoordinates[1] = y

        return currentCoordinates
    }






}