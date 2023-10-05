package database

import org.junit.Test
import org.starter.model.Event

//https://kotlinlang.org/docs/jvm-test-using-junit.html
class eventsDAOTest {

    @Test
    fun testDatabase() {
        val database = EventsDAO()
        val databaseEvents = database.getEvent()
        println(databaseEvents)
        assert(databaseEvents.isNotEmpty())
    }


    //TODO this needs to be better tested
    @Test
    fun testGetEvent() {
        val database = EventsDAO()
        val databaseEvent = database.getEventById(1)
        println(databaseEvent)
        assert(databaseEvent == Event(1,"Go for a run"))
    }
}