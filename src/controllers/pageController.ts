import { Request, Response } from 'express'  

export const home = (req: Request, res: Response) => {
    res.send('Home!')
}

export const cats = (req: Request, res: Response) => {
    res.send('Cats!')
}

export const dogs = (req: Request, res: Response) => {
    res.send('Dogs!')
}

export const fishes = (req: Request, res: Response) => {
    res.send('Fishes!')
}