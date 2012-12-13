function (doc) {
  if (doc._id.substr(0, 3) === "mem") {
    emit(doc._id.substr(3), {
    	"First Name": doc.fname,
    	"Last Name": doc.lname,
    	"Password": doc.pword,
    	"Confirm Password": doc.cpword,
    	"Email": doc.email,
    	"Friends": doc.quantity,
    	"Day": doc.day,
    	"Month": doc.month,
    	"Year": doc.year,
    	"Comments": doc.comments
    	
    });
  }
};