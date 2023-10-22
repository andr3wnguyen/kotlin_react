package database

import io.mockk.mockkStatic
import org.junit.Test
import org.starter.model.Event
import org.mockito.Mockito
import org.starter.model.UserPreferences
import org.starter.services.EventService
import java.io.File

//https://kotlinlang.org/docs/jvm-test-using-junit.html
class eventsDAOTest {

    @Test
    fun testDatabase() {
        val database = EventsDAO()
        val databaseEvents = database.getEvent()
        println(databaseEvents)
        assert(databaseEvents.isNotEmpty())
    }


    //TODO this needs to be better tested MOCKED.
    @Test
    fun testGetEvent() {
        //mock the csv reader
        //given
        val eventsDAO = EventsDAO()

        //read in the temp file
        eventsDAO.getEventsFromNewSource("src/test/kotlin/org/starter/datastorage/testfile.csv")

        //when
        val databaseEvent = eventsDAO.getEventById(1)

        //then
        val expected = Event(1, "go for a walk", group = "group", indoor = "outdoor", "none","none")
        assert(databaseEvent == expected)
    }


    fun getFilteredEvents() {

        //given
        val eventsDAO = EventsDAO()
        //read in the temp file
        eventsDAO.getEventsFromNewSource("src/test/kotlin/org/starter/datastorage/testfile.csv")

        //when
        val userPreferences = UserPreferences(group = "alone", indoor = "indoor")
        val expected = listOf(Event(2, "go be alone inside", group = "alone", indoor = "indoor", description="none", image="none"))
        val actual = eventsDAO.getFilteredEvents(userPreferences)


        //then
        assert(actual == expected)

    }
}