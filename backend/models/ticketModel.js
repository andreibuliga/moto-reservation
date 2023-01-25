const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		product: {
			type: String,
			required: [true, "Va rugam selectati un produs"],
			enum: ["motocicleta", "motocross", "atv", "bicicleta"],
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Ticket", ticketSchema);
