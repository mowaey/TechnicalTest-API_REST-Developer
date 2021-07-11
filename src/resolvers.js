import Duty from '../models/Duty';

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
        async getDuties() {
            return await Duty.find();
        },
        async getDuty(_, { _id }) {
            return await Duty.findById(_id);
        }
    },
    Mutation: {
        async createDuty(_, { input }) {
            const newDuty = new Duty(input);
            await newDuty.save();
            return newDuty;
        },
        async updateDuty(_, { _id, input }) {
            return await Duty.findByIdAndUpdate(_id, input, { new: true });
        },
        async deleteDuty(_, { _id }) {
            return await Duty.findByIdAndDelete(_id);
        }
    }
};