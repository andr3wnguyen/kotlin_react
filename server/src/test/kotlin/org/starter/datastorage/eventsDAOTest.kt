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
        val databaseEvent = eventsDAO.getEventById(2)

        //then
        val expected = Event(2,"Safari","Maasai Mara, Kenya","hot","ancient","rural","adventure","plains","luxury","tranquility","Embark on a thrilling safari in the Maasai Mara, home to diverse wildlife.","https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg")
        assert(databaseEvent == expected)
    }


    fun getFilteredEvents() {

        //given
        val eventsDAO = EventsDAO()
        //read in the temp file
        eventsDAO.getEventsFromNewSource("src/test/kotlin/org/starter/datastorage/testfile.csv")

        //when
        val userPreferences = UserPreferences("cold","ancient","rural","adventure","mountains","luxury","tranquility")
        val expected = listOf(Event(1,"Hiking","Swiss Alps","cold","ancient","rural","adventure","mountains","luxury","tranquility","Explore the breathtaking Swiss Alps through scenic hiking trails.","https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg"))
        val actual = eventsDAO.getFilteredEvents(userPreferences)


        //then
        assert(actual == expected)

    }
}