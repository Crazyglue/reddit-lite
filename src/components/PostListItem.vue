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
                            <a class="headline mb-0" :href="url">{{ title }}</a>
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
                        <v-btn flat color="orange"><v-icon left dark>comment</v-icon>Comments</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-hover>
        </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: 'PostList',
    props: [ 'thumbnail', 'thumbnail_height', 'title', 'body', 'permalink' ],
    computed: {
        decodedThumbnail() {
            if (this.thumbnail === 'self') {
                return null
            }

            const parser = new DOMParser
            const dom = parser.parseFromString(
                '<!doctype html><body>' + this.thumbnail,
                'text/html');
            const decodedString = dom.body.textContent;
            return decodedString
        },
        url() {
            return `https://reddit.com${this.permalink}`;
        }
    }
}
</script>

<style>

</style>
