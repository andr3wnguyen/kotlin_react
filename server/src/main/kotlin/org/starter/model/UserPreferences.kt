package org.starter.model

import kotlinx.serialization.Serializable

@Serializable
data class UserPreferences(
    val climate: String,
    val historical: String,
    val urban: String,
    val activities: String,
    val scenery: String,
    val budget: String,
    val vibe: String
)

