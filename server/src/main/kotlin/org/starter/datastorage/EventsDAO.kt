package database

import org.starter.model.Event
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
                    val (id, title) = it.split(',', ignoreCase = false, limit = 2)
                    Event(id.trim().toInt(), title.trim().removeSurrounding("\""))
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

    //method to alter the events (add/remove)

}