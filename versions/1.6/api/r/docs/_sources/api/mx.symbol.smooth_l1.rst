

``mx.symbol.smooth_l1``
==============================================

Description
----------------------

Calculate Smooth L1 Loss(lhs, scalar) by summing.  

.. math::

	f(x) =
    \begin{cases}
    (\sigma x)^2/2,& \text{if }x < 1/\sigma^2\\
    |x|-0.5/\sigma^2,& \text{otherwise}
    \end{cases}

where :math:`x` is an element of the tensor *lhs* and :math:`\sigma` is the scalar.


**Example**::

	 
	 smooth_l1([1, 2, 3, 4]) = [0.5, 1.5, 2.5, 3.5]
	 smooth_l1([1, 2, 3, 4], scalar=1) = [0.5, 1.5, 2.5, 3.5]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.smooth_l1(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol                                          |
|                                        | source input                                               |
+----------------------------------------+------------------------------------------------------------+
| ``scalar``                             | float.                                                     |
|                                        |                                                            |
|                                        | scalar input                                               |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_scalar_op_extended.cc#L108

