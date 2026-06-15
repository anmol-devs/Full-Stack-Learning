function main() {
    try {
        let a = parseInt(prompt("Enter a number: "));
        let b = parseInt(prompt("Enter another number: "));

        if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input");
        }

        console.log("The sum is:", a + b);
    }
    catch (error) {
        console.error("An error occurred:", error.message);
    }
    finally {
        console.log("Execution completed.");
    }
}

main();