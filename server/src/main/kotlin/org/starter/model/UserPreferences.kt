package org.starter.model

import kotlinx.serialization.Serializable

@Serializable
data class UserPreferences(
    val climate: String,
    val historical: String,
    val activities: String,
    val budget: String,
)

