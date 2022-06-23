let {expect} = require('chai')
let {cinema} = require('./cinema.js')

describe("Tests", () => {
    describe('showMovies', () => {
        it('happy case', () => {
            expect(cinema.showMovies(['A'])).to.equal('A')
            expect(cinema.showMovies(['A', 'B'])).to.equal('A, B')
        })
        it('zero length', () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        })
    })

    describe('ticketPrice', () => {
        it('happy case', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12)
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        })
        it('invalid type', () => {
            expect(() => cinema.ticketPrice('P')).to.throw()
            expect(() => cinema.ticketPrice({})).to.throw()
            expect(() => cinema.ticketPrice([])).to.throw()
            expect(() => cinema.ticketPrice(5)).to.throw()
        })
    })

    describe('swapSeatsInHall', () => {
        it('happy case', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 1)).to.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 20)).to.equal("Successful change of seats in the hall.")
        })
        it('unsuccessfull change', () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(21, 1)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(1, -1)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall('1', 1)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(1, '1')).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall." )
            expect(cinema.swapSeatsInHall(-1, 21)).to.equal("Unsuccessful change of seats in the hall." )
        })
    })
})
