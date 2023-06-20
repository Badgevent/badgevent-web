const random = require("random-name");
const fs = require("fs");

const attendeeFilePath = "../src/mockdata/eventbrite-event-attendees.json";
const attendeeFilePathOut =
  "../src/mockdata/eventbrite-event-attendees-out.json";
attendeeData = fs.readFileSync(attendeeFilePath);
attendees = JSON.parse(attendeeData);

const orderLastNames = {};

let attendeeIndex = 0;
attendees["attendees"].forEach((attendee) => {
  attendeeIndex++;

  let newAttendeeId = ("000000000" + attendeeIndex).slice(-10);
  newFirst = random.first();
  const eventId = attendee["event_id"];
  const orderId = attendee["order_id"];
  // set the last name the same for attendees on the same order
  if (orderId in orderLastNames) {
    newLast = orderLastNames[orderId];
  } else {
    newLast = random.last();
  }

  attendee["id"] = newAttendeeId;
  attendee["resource_uri"] =
    "https://www.eventbriteapi.com/v3/events/" +
    eventId +
    "/attendees/" +
    newAttendeeId +
    "/";
  attendee["profile"]["first_name"] = newFirst;
  attendee["profile"]["last_name"] = newLast;
  attendee["profile"]["email"] =
    (newFirst.slice(0, 1) + newLast).toLowerCase() + "@example.com";
  attendee["profile"]["name"] = newFirst + " " + newLast;
  let badgeIndex = 0;
  attendee["barcodes"].forEach((badge) => {
    badgeIndex++;
    badge["barcode"] = eventId + orderId + ("00" + attendeeIndex).slice(-3);
  });
  attendee["answers"].forEach((question) => {
    if (question["question"] == "Badge Name" && "answer" in question) {
      question["answer"] = newFirst;
    }
  });
});

fs.writeFileSync(attendeeFilePathOut, JSON.stringify(attendees, null, 4));
