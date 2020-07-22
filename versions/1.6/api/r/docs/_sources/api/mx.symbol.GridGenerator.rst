

``mx.symbol.GridGenerator``
======================================================

Description
----------------------

GridGenerator:Generates 2D sampling grid for bilinear sampling.

Usage
----------

.. code:: r

	mx.symbol.GridGenerator(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to the function.                                |
+----------------------------------------+------------------------------------------------------------+
| ``transform.type``                     | {'affine', 'warp'}, required.                              |
|                                        |                                                            |
|                                        | The type of transformation. For `affine`, input data       |
|                                        | should be an affine matrix of size (batch, 6). For `warp`, |
|                                        | input data should be an optical flow of size (batch, 2, h, |
|                                        | w).                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``target.shape``                       | Shape(tuple), optional, default=[0,0].                     |
|                                        |                                                            |
|                                        | Specifies the output shape (H, W). This is required if     |
|                                        | transformation type is `affine`. If transformation type is |
|                                        | `warp`, this parameter is                                  |
|                                        | ignored.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


