package database

import org.starter.model.Event
import org.starter.model.UserPreferences
import java.io.File

class EventsDAO {
    //TODO why is this csv file path so janky
    private var events: List<Event> = readCsv("src/main/kotlin/org/starter/datastorage/events.csv")

    //method to populate the list of events https://www.baeldung.com/kotlin/csv-files
    //read in csv and return it as events.
    fun readCsv(csvFile: String): List<Event> {
        val contents = File(csvFile)
        val reader = contents.bufferedReader()
        val header = reader.readLine()
        return reader.lineSequence()
            .filter { it.isNotBlank() }
            .map {
//                val (id, title, group, indoor,description,image) = it.split(',', ignoreCase = false, limit = 6)
//                Event(
//                    id.trim().toInt(),
//                    title.trim().removeSurrounding("\""),
//                    group.trim().removeSurrounding("\""),
//                    indoor.trim().removeSurrounding("\""),
//                    description.trim().removeSurrounding("\""),
//                    image.trim().removeSurrounding("\""),
                val fields = it.split(',', ignoreCase = false, limit = 6)
                Event(
                    fields[0].trim().toInt(),
                    fields[1].trim().removeSurrounding("\""),
                    fields[2].trim().removeSurrounding("\""),
                    fields[3].trim().removeSurrounding("\""),
                    fields[4].trim().removeSurrounding("\""),
                    fields[5].trim().removeSurrounding("\""),
                    fields[6].trim().removeSurrounding("\""),
                    fields[7].trim().removeSurrounding("\""),
                    fields[8].trim().removeSurrounding("\""),
                    fields[9].trim().removeSurrounding("\""),
                    fields[10].trim().removeSurrounding("\""),
                    fields[11].trim().removeSurrounding("\"")
                )

            }.toList()
    }

    //method to get the events
    fun getEvent(): List<Event> {
//        println(events)
        return events
    }

    //method to get one event
    fun getEventById(id: Int): Event {
        return events.filter { it.id == id }.first()
    }

    //method to filter the events (add/remove)
    fun getFilteredEvents(userPreference: UserPreferences): List<Event> {
        //give some user preferences, return a list of those in which the values match up

        val filters = sequenceOf(
            mapOf("climate" to checkFilterOrNot(userPreference.climate)),
            mapOf("historical" to checkFilterOrNot(userPreference.historical)),
            mapOf("urban" to checkFilterOrNot(userPreference.urban)),
            mapOf("activities" to checkFilterOrNot(userPreference.activities)),
            mapOf("scenery" to checkFilterOrNot(userPreference.scenery)),
            mapOf("budget" to checkFilterOrNot(userPreference.budget)),
            mapOf("vibe" to checkFilterOrNot(userPreference.vibe)),


        )

        var filteredEvents = events

        for (filter in filters) {
            val key = filter.keys.first()
            val value = filter[key]

            //if there is a value, filter that key, if not then set true and move onto next filter.
            if (value?.isNotEmpty() == true) {
                // Apply the filter conditionally
                filteredEvents = filteredEvents.filter {
                    when (key) {
                        "climate" -> it.climate == value
                        "historical" -> it.historical == value
                        "urban" -> it.urban == value
                        "activities" -> it.activities == value
                        "scenery" -> it.scenery == value
                        "budget" -> it.budget == value
                        "vibe" -> it.vibe == value

                        else -> true // Handle other columns as needed
                    }
                }
            }
        }
        return filteredEvents
    }


    fun checkFilterOrNot(userPreference: String): String {
        //check if uP noP - if it is then do nothing
        return if (userPreference == "No Preference") "" else userPreference
    }


    //method for testing, does it need to be [protected] or something?
    fun getEventsFromNewSource(csv: String): Unit {
        events = readCsv(csv)
    }


}