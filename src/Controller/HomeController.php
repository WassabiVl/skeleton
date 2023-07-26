<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class HomeController extends AbstractController
{
    #[Route('/{any}', name: 'main', requirements: ['any' => "^((?!api).)*$"], methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }
}