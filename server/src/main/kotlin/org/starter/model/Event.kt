package org.starter.model

import kotlinx.serialization.Serializable
@Serializable
data class Event(
        val id: Int,
        val activity: String,
        val location: String,
        val climate: String,
        val historical: String,
        val urban: String,
        val activities: String,
        val scenery: String,
        val budget: String,
        val vibe: String,
        val description: String,
        val image: String
)