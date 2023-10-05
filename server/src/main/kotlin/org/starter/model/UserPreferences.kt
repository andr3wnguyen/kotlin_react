package org.starter.model

import kotlinx.serialization.Serializable

@Serializable
data class UserPreferences(
        val indoor: Boolean,
        val group: Boolean
)

