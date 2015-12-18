export class StringGenerator {
    private chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    generate(length) {
        var string = '', pos = 0;

        for (var i = 0; i < length; i++) {
            pos = Math.floor(Math.random() * this.chars.length);

            string += this.chars.substring(pos, pos + 1);
        }

        return string;
    }
}
