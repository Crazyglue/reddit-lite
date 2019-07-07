<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-hover>
                <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                >

                    <v-card-title primary-title>
                        <div class="text-truncate">
                            <a class="headline mb-0" :href="decodedThumbnail">{{ title }}</a><br />
                            <span class="grey--text">By u/{{ author }}</span><br />
                            <span class="grey--text">{{ dateCreated }} ago</span><br />
                            <div>{{ body }}</div>
                        </div>
                    </v-card-title>

                    <v-img
                        v-if="decodedThumbnail"
                        :max-height="'300px'"
                        contain
                        :src="decodedThumbnail"
                    ></v-img>

                    <v-card-actions>
                        <v-btn flat color="orange" :href="url"><v-icon left dark>comment</v-icon>Comments</v-btn>
                    </v-card-actions>
                </v-card>
            </v-hover>
        </v-flex>
  </v-layout>
</template>

<script>
import distanceInWords from 'date-fns/distance_in_words';

export default {
    name: 'PostList',
    props: [ 'author', 'created', 'thumbnail', 'thumbnail_height', 'title', 'body', 'permalink' ],
    computed: {
        // This function is need to convert any html-encoded symbols to their url-friendly equivalent
        // ie, `&amp;` -> `&`
        decodedThumbnail() {
            if (this.thumbnail === 'self') {
                return null
            }

            const parser = new DOMParser
            const dom = parser.parseFromString(
                '<!doctype html><body>' + this.thumbnail,
                'text/html'
            );
            const decodedString = dom.body.textContent;
            return decodedString;
        },
        url() {
            return `https://reddit.com${this.permalink}`;
        },
        dateCreated() {
            // created is in epoch-seconds (not milliseconds)
            return distanceInWords(new Date(this.created * 1000), new Date())
        }
    }
}
</script>
