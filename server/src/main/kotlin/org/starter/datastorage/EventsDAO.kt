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
                    val (id, title, group, indoor) = it.split(',', ignoreCase = false, limit = 4)
                    Event(id.trim().toInt(), title.trim().removeSurrounding("\""), group.trim().toBoolean(), indoor.trim().toBoolean())
                }.toList()
    }

    //method to get the events
    fun getEvent(): List<Event> {
//        println(events)
        return events
    }

    //method to get one event
    fun getEventById(id:Int): Event {
        return events.filter { it.id == id }.first()
    }

    //method to filter the events (add/remove)
    fun getFilteredEvents(userPreference:UserPreferences): List<Event> {
        //give some user preferences, return a list of those in which the values match up
        return events.filter { it.indoor == userPreference.indoor && it.group == userPreference.group}
    }














    //method for testing, does it need to be [protected] or something?
    fun getEventsFromNewSource(csv:String): Unit {
        events = readCsv(csv)
    }



}