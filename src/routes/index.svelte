<script context="module">
    //load function
    export const load = ({ session }) => {
        console.log(session);
        return {
            props: {
                session,
            },
        };
    };

   // import { session } from "$app/stores"; --one of the ways
</script>

<script>
    export let session;
</script>

{JSON.stringify(session)}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
