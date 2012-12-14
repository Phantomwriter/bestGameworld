function (doc) {
  if (doc._id.substr(0, 3) === "mem") {
    emit(doc._id.substr(3), {
    	"FirstName": doc.fname,
    	"LastName": doc.lname,
    	"Password": doc.pword,
    	"ConfirmPassword": doc.cpword,
    	"Email": doc.email,
    	"Friends": doc.quantity,
    	"Day": doc.day,
    	"Month": doc.month,
    	"Year": doc.year,
    	"Comments": doc.comments
    	
    });
  }
};