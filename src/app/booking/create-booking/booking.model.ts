export class Booking {
    constructor(
        public Id: string,
        public userId: string,
        public placeId: string,
        public placeTitle: string,
        public guestNumber: number
    ) {}

}
